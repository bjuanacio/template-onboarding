type VariantText =
  | 'hero'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'title'
  | 'subtitle'
  | 'bodyText'
  | 'captionText'
  | 'legalText'
  | 'amountPrimary'
  | 'amountSecondary'
  | 'actionLinkBody'
  | 'actionLinkCaption'
  | 'actionLinkLegal'
  | 'actionDefault'
  | 'actionSmall'
  | 'smallText'
  | 'tinyText'
  | 'actionText'
  | 'alertButtonText';
type Colors =
  | 'blue'
  | 'grey'
  | 'yellow'
  | 'black'
  | 'white'
  | 'darkGrey'
  | 'danger'
  | 'info'
  | 'success'
  | 'warning'
  | 'strongBlue'
  | 'grayishRed'
  | 'moderateCyan'
  | 'yellowGold'
  | 'darkCyan'
  | 'pureOrange'
  | 'darkGrayishBlue'
  | 'error';
type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify';
type Weigth = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
type Size = 'extra-small' | 'small' | 'medium' | 'large';
type ThemeColors = 'primary' | 'secondary' | 'complementary' | 'tertiary' | 'destructive';
type CommonStates = 'normal' | 'disabled' | 'error';
type IconTypes = '--outlined' | '--round' | '--sharp' | '--two-tone';

interface HTMLPichinchaTypographyElement extends PichinchaTypographyHTMLAttributes {
  addEventListener(event: string, callback: CallableFunction): void;
  removeEventListener(event: string, callback: CallableFunction): void;
}

interface HTMLPichinchaButtonElement extends PichinchaButtonHTMLAttributes {
  addEventListener(event: string, callback: CallableFunction): void;
  removeEventListener(event: string, callback: CallableFunction): void;
}

interface HTMLPichinchaCheckBoxElement extends PichinchaCheckBoxHTMLAttributes {
  addEventListener(event: string, callback: CallableFunction): void;
  removeEventListener(event: string, callback: CallableFunction): void;
}

interface HTMLPichinchaInputElement extends PichinchaInputHTMLAttributes {
  addEventListener(event: string, callback: CallableFunction): void;
  removeEventListener(event: string, callback: CallableFunction): void;
}

interface HTMLPichinchaAlertMessageElement extends PichinchaAlertMessageHTMLAttributes {
  addEventListener(event: string, callback: CallableFunction): void;
  removeEventListener(event: string, callback: CallableFunction): void;
}

interface HTMLPichinchaSelectElement extends PichinchaAlertMessageHTMLAttributes {
  addEventListener(event: string, callback: CallableFunction): void;
  removeEventListener(event: string, callback: CallableFunction): void;
}

interface PichinchaTypographyHTMLAttributes {
  align?: Align;
  color?: Colors;
  inline_styles?: object;
  variant?: VariantText;
  weight?: 'normal' | 'bold';
  weight_color?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  children?: React.ReactNode;
}

interface PichinchaSelectHTMLAttributes {
  border?: boolean;
  click_timeout_ms?: number;
  controls?: boolean;
  idElement?: string;
  inputChildInlineStyles?: object;
  inputContainerInlineStyles?: object;
  items?: SelectItem[];
  list_option_align?: Align;
  opacity?: boolean;
  options_list_width?: string;
  placeholder?: string;
  primary_color?: Colors;
  primary_color_weight?: Weigth;
  show_check_in_list?: boolean;
  show_options_number?: number;
  show_reset_button?: boolean;
  size?: Size;
  state?: CommonStates | 'focus';
  clickedItem?(): void;
}

interface PichinchaCheckBoxHTMLAttributes {
  checked?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  errorHelper?: string;
  idElement?: string;
  nameElement?: string;
  offLabelClick?: boolean;
  typeCheck?: string;
  value?: string;
  onClickCheck?(): void;
}
interface PichinchaButtonHTMLAttributes {
  color?: ThemeColors;
  disabled?: boolean;
  href?: string;
  type?: string;
  idElement?: string;
  loading?: boolean;
  size?: Size;
  tabIndexInner?: number;
  value?: string;
  iconName?: string;
  iconNameRight?: string;
  iconType?: IconTypes;
  onlyIcon?: boolean;
  ref?: MutableRefObject;
  onClick?(): void;
  children?: React.ReactNode;
}

interface PichinchaLinkHTMLAttributes {
  align?: Align;
  color?: Colors;
  disabled?: boolean;
  display?: string;
  href?: string;
  idElement?: string;
  inline_styles?: object;
  target?: string;
  variant?: VariantText;
  weight?: Weigth;
  onClick?(): void;
  children?: React.ReactNode;
}


interface PichinchaInputHTMLAttributes {
  inputmode?: string;
  pattern?: string;
  ref?: MutableRefObject;
  autoComplete?: boolean;
  autofocus?: boolean;
  class?: string;
  controlEvent?: boolean;
  errorHelper?: string;
  filterRegex?: string;
  floatingLabel?: boolean;
  fullWidth?: boolean;
  hideNumberHandles?: boolean;
  hidePasswordText?: string;
  idElement?: string;
  inputmode?: string;
  label?: string;
  maxLength?: number;
  nameElement?: string;
  normalHelper?: string;
  pattern?: string;
  placeholder?: string;
  showIconStatus?: boolean;
  showMaxLength?: boolean;
  showPasswordText?: string;
  showPasswordToggle?: boolean;
  showTooltipOnChange?: boolean;
  size?: Size;
  state?: CommonStates | 'success';
  tabIndexElement?: number;
  tooltip?: string;
  tooltipBody?: string;
  type?: string;
  value?: string;
  onChange?(value: string, elementName: string): void;
}

interface PichinchaAlertMessageHTMLAttributes {
  acceptButtonText?: string;
  adjustIn?: boolean;
  alertTitle?: string;
  allowClose?: boolean;
  autoClose?: number;
  cancelButtonText?: string;
  closeTime?: number;
  idElement?: string;
  open?: boolean;
  status?: "error" | "info" | "success" | "warning";
  top?: number;
  variant?: "light" | "normal";
  closeMessage?(): void;
}



type DesignSystemElementAttributes =
  | PichinchaButtonHTMLAttributes
  | PichinchaInputHTMLAttributes
  | PichinchaTypographyHTMLAttributes
  | PichinchaLinkHTMLAttributes
  | PichinchaCheckBoxHTMLAttributes
  | PichinchaAlertMessageHTMLAttributes
  | PichinchaSelectHTMLAttributes;

declare namespace JSX {
  interface IntrinsicElements {
    'pichincha-button': PichinchaButtonHTMLAttributes;
    'pichincha-input': PichinchaInputHTMLAttributes;
    'pichincha-typography': PichinchaTypographyHTMLAttributes;
    'pichincha-link': PichinchaLinkHTMLAttributes;
    'pichincha-check-box': PichinchaCheckBoxHTMLAttributes;
    'pichincha-alert-message': PichinchaAlertMessageHTMLAttributes;
    'pichincha-select': PichinchaSelectHTMLAttributes;
  }
}
