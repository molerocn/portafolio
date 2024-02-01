interface Props {
  activeColors: {
    first_color: boolean;
    second_color: boolean;
    third_color: boolean;
  };
}

const NameAnimation = ({ activeColors }: Props) => {
  const { first_color, second_color, third_color } = activeColors;
  return (
    <div className="text-7xl font-bold flex flex-wrap name-animation">
      <div className="relative mr-4">
        <span
          className={` 
          ${
            first_color
              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-green-600 opacity-100"
              : "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-green-600 opacity-0"
          }
          

        duration-1000 transition-opacity z-10
        
        `}
        >
          Juan{" "}
        </span>
        <span
          className="text-black dark:text-white transition-opacity
          absolute left-0 -z-10
        "
        >
          Juan{" "}
        </span>
      </div>
      <div className="relative mr-4">
        <span
          className={` 
          ${
            second_color
              ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-rose-600 opacity-100"
              : "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-rose-600 opacity-0"
          }
          

        duration-1000 transition-opacity z-10
        
        `}
        >
          Carlos{" "}
        </span>
        <span
          className={` text-black dark:text-white transition-opacity
          absolute left-0 -z-10
        `}
        >
          Carlos{" "}
        </span>
      </div>
      <div className="relative">
        <span
          className={` 
          ${
            third_color
              ? "text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-yellow-600 opacity-100"
              : "text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-yellow-600 opacity-0"
          }
          

        duration-1000 transition-opacity z-10
        
        `}
        >
          Molero{" "}
        </span>
        <span
          className={` text-black dark:text-white transition-opacity
          absolute left-0 -z-10
        `}
        >
          Molero{" "}
        </span>
      </div>
    </div>
  );
};

export default NameAnimation;
