import { Badge, Label, RangeSlider } from "flowbite-react";
import { ReactNode, useState } from "react";

const RangeComponent: (props: {
  min: number;
  max: number;
  steps: number;
  title: string;
}) => ReactNode = ({ min, max, steps, title }) => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="mb-1 mt-3  flex gap-2">
        <Label htmlFor="range" value={title} />
        <Badge color={"failure"}>{value}</Badge>
      </div>
      <RangeSlider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={steps}
        className="w-full"
      />
    </>
  );
};

export default RangeComponent;
