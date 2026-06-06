import React, { act, useEffect, useState } from "react";
import {
  getPriorityBadgeColor,
  getPriorityColor,
  MENU_OPTIONS,
  TI_CLASSES,
} from "../assets/dummy";
import { Calendar, CheckCircle2, Clock, MoreVerticalIcon } from "lucide-react";
import axios from "axios";
import { format, isToday } from "date-fns";
import TaskModal from "./TaskModal";

// const API_BASE = "http://localhost:4000/api/tasks";
const API_BASE =
  "https://personal-task-tracker-app-backend.onrender.com/api/tasks";

const TaskItem = ({
  task,
  onRefresh,
  showCompleteCheckbox = true,
  onLogout,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isCompleted, setIsCompleted] = useState(
    [true, 1, "yes"].includes(
      typeof task.completed === "string"
        ? task.completed.toLowerCase()
        : task.completed,
    ),
  );
  const [showEditModel, setShowEditModel] = useState(false);
  const [subtasks, setSubTasks] = useState(task.subtasks || []);

  useEffect(() => {
    setIsCompleted(
      [true, 1, "yes"].includes(
        typeof task.completed === "string"
          ? task.completed.toLowerCase()
          : task.completed,
      ),
    );
  }, [task.completed]);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No auth token found");
    return { Authorization: `Bearer ${token}` };
  };

  const borderColor = isCompleted
    ? "border-green-500"
    : getPriorityColor(task.priority).split(" ")[0];

  const progress = subtasks.length
    ? (subtasks.filter((st) => st.completed).length / subtasks.length) * 100
    : 0;

  const handleComplete = async () => {
    const newStatus = isCompleted ? "No" : "Yes";
    try {
      await axios.put(
        `${API_BASE}/${task._id}/tm`,
        { completed: newStatus },
        { headers: getAuthHeaders() },
      );
      setIsCompleted(!isCompleted);
      onRefresh?.();
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) onLogout?.();
    }
  };

  const handleAction = (action) => {
    setShowMenu(false);
    if (action === "edit") setShowEditModel(true);
    if (action === "delete") handleDelete();
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_BASE}/${task._id}/tm`, {
        headers: getAuthHeaders(),
      });
      onRefresh?.();
    } catch (err) {
      if (err.response?.status === 401) onLogout?.();
    }
  };

  const handleSave = async (updatedTask) => {
    try {
      const payload = (({
        title,
        description,
        priority,
        dueDate,
        completed,
      }) => ({ title, description, priority, dueDate, completed }))(
        updatedTask,
      );

      await axios.put(`${API_BASE}/${task._id}/tm`, payload, {
        headers: getAuthHeaders(),
      });
      setShowEditModel(false);
      onRefresh?.();
    } catch (err) {
      if (err.response?.status === 401) onLogout?.();
    }
  };

  return (
    <>
      <div className={`${TI_CLASSES.wrapper} ${borderColor}`}>
        <div className="flex justify-between gap-2 sm:gap-4 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col justify-between max-w-[60%]">
            {/* TOP */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3
                  className={`${TI_CLASSES.titleBase} ${
                    isCompleted
                      ? "line-through text-maintxt/60"
                      : "text-maintxt"
                  }`}
                >
                  {task.title}
                </h3>

                <span
                  className={`${TI_CLASSES.priorityBadge} ${getPriorityBadgeColor(
                    task.priority,
                  )} font-medium`}
                >
                  {task.priority}
                </span>
              </div>

              {task.description && (
                <p className={TI_CLASSES.description}>{task.description}</p>
              )}
            </div>

            {/* DATES */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs text-maintxt/50 mt-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {task.dueDate ? format(new Date(task.dueDate), "MMM dd") : "-"}
              </div>

              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {task.createdAt
                  ? `Created ${format(new Date(task.createdAt), "MMM dd")}`
                  : "No date"}
              </div>
            </div>
          </div>

          {/* ACTION BTN */}
          <div className="flex flex-col gap-2 items-end shrink-0">
            <button
              onClick={handleComplete}
              disabled={isCompleted}
              className={`${TI_CLASSES.actionBtn} ${
                isCompleted
                  ? "bg-green-500/20 text-green-300 cursor-not-allowed"
                  : "bg-two/70 text-maintxt hover:scale-[1.02] cursor-pointer"
              }`}
            >
              {isCompleted ? "Completed" : "Complete Task"}
            </button>

            <button
              onClick={() => setShowEditModel(true)}
              className={TI_CLASSES.secondaryBtn}
            >
              Edit Task
            </button>

            <button onClick={handleDelete} className={TI_CLASSES.dangerBtn}>
              Delete
            </button>
          </div>
        </div>
      </div>

      <TaskModal
        isOpen={showEditModel}
        onClose={() => setShowEditModel(false)}
        taskToEdit={task}
        onSave={handleSave}
      />
    </>
  );
};

export default TaskItem;
