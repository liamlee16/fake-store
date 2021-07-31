import React from "react";

type StarProps = {
  marked: boolean;
  starId: number;
  size?: number;
};

const Star = ({ marked, starId, size }: StarProps) => {
  return (
    <span
      style={{
        color: "#ff9933",
        cursor: "pointer",
        fontSize: `${size || 20}px`,
      }}
      data-star-id={starId}
      className="star"
      role="button"
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

type StarRatingProps = {
  value: string;
  readonly?: boolean;
  size?: number;
};

const StarRating = ({ value, readonly, size }: StarRatingProps) => {
  const [rating, setRating] = React.useState(parseInt(value) || 0);
  const [selection, setSelection] = React.useState(0);

  const hoverOver = (event: any) => {
    if (readonly) return;

    let val = 0;
    if (event && event.target && event.target.getAttribute("data-star-id"))
      val = event.target.getAttribute("data-star-id");
    setSelection(val);
  };
  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={(e: any) => {
        if (readonly) return;
        setRating(e.target.getAttribute("data-star-id") || rating);
      }}
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          size={size}
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
};

export default StarRating;
