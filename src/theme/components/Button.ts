export const Button = {
  variants: {
    Shop: {
      bg: "white",
      p: "10px",
      m: "10px",
    },
    ReadMore: {
      fontSize: ["1rem", "1.5rem"],
      fontWeight: "semibold",
      color: "FirstColor",
      margin: "40px 0 !important",
      display: "flex",
      background: "#edf2f754",
      padding: "30px 0",
      width: "fit-content",
      borderRadius: "5px",
      border: "3px solid #edf2f754",
      borderLeft: "3px solid #7d99b5",
      transition:"0.4s",
      _hover:{
        border: "3px solid FirstColor",
        background: "FirstColor",
        color: "White",
      }
    },
  },
};
