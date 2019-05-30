class UI {
  static dom = () => {
    const sound = [...document.querySelectorAll(".pads")];
    const visual = document.querySelector(".visual");
    const bubble = document.createElement("div");

    return { sound, visual, bubble };
  };
}

class Animation {
  static animate = function(index) {
    const colors = [
      "#60d394",
      "#d36060",
      "#c060d3",
      "#d3d160",
      "#606bd3",
      "#60c2d3"
    ];

    const visual = UI.dom().visual;
    const bubble = UI.dom().bubble;

    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
}
