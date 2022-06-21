import { PlusCircle, Trash } from 'phosphor-react';

import styles from './Task.module.css';

type TaskProps = {
  isFinished: boolean;
  id: string;
  content: string;
  onToggleCompleted: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export function Task({
  content,
  isFinished,
  id,
  onToggleCompleted,
  onDeleteTask,
}: TaskProps) {
  return (
    <div className={isFinished ? styles.taskFinished : styles.task}>
      <input
        type="checkbox"
        defaultChecked={isFinished}
        onChange={() => onToggleCompleted(id)}
      />
      <span className={isFinished ? 'finished' : ''}>{content}</span>
      <button onClick={() => onDeleteTask(id)}>
        <Trash size={22} />
      </button>
    </div>
  );
}
