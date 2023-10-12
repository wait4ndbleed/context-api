import { useEffect, useState } from "react";

type Props = {
  onClick: () => void;
  isChecked: any;
}

export const ThemeButton = ({ onClick, isChecked }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="flex items-center py-4" >
        <label
          className="relative w-16 h-8 mx-5"
        >
          <input type="checkbox" className="hidden peer" defaultChecked={isChecked} onClick={onClick} />
          <span className="absolute  top-0 right-0 bottom-0 left-0 cursor-pointer rounded-2xl bg-slate-100 border border-slate-800 before:transition-all before:duration-1000 before:content-[''] before:absolute before:w-[24px] before:h-[24px] before:left-[4px] before:bottom-[4px] before:rounded-full before:bg-slate-500 peer-checked:before:translate-x-[30px] peer-checked:bg-slate-800 peer-checked:before:border peer-checked:before:border-slate-800 peer-checked:before:bg-slate-100" />
        </label>
      </div>
    </>
  );
};
