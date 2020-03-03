export const Red = Symbol();
export const Orange = Symbol();
export const Yellow = Symbol();
export const Green = Symbol();
export const TealBlue = Symbol();
export const Blue = Symbol();
export const Purple = Symbol();
export const Pink = Symbol();

export function palette(COLOR) {
  switch(COLOR) {
    case Red:
        return "#ff3b30";
    case Orange:
        return "#ff9500";
    case Yellow:
        return "#ffcc00";
	case Green:
        return "#4cd964";
	case TealBlue:
        return "#5ac8fa";
	case Blue:
        return "#007aff";
	case Purple:
        return "#5856d6";
	case Pink:
        return "#ff2d55";
  }
}
