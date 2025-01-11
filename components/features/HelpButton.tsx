import { Modal } from "antd";

export const HelpButton = ({
  title,
  content,
  description,
  className,
}: {
  title: string;
  content: string | React.ReactNode;
  description?: string;
  className?: string;
}) => {
  const onClick = () => {
    Modal.info({
      title: title,
      content: content,
      className: "max-md:w-full h-svh",
      width: "960px",
    });
  };

  return (
    <div
      onClick={onClick}
      className={`flex flex-row justify-center items-center gap-0.5 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-400 hover:fill-slate-300 cursor-pointer"
        height="22px"
        viewBox="0 -960 960 960"
        width="22px"
      >
        <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>
      {description && (
        <p className="text-xs h-4 max-md:hidden">{description}</p>
      )}
    </div>
  );
};
