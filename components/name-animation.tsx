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
    <div className="text-7xl font-bold">
      <span
        className={`
        ${
          first_color
            ? " text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-green-600 opacity-100"
            : " opacity-0"
        }
        duration-1000 transition-opacity
        `}
      >
        Juan{" "}
      </span>
      <span
        className={`
        ${
          second_color &&
          "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-rose-600"
        }
           transition-colors duration-1000        
        `}
      >
        Carlos{" "}
      </span>
      <span
        className={`
        ${
          third_color &&
          "text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-yellow-600"
        }
           transition-colors duration-1000         
        `}
      >
        Molero
      </span>
    </div>
  );
};

export default NameAnimation;
