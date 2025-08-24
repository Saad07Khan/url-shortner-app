import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Add any custom HTML attributes here
    className?: string;
    style?: React.CSSProperties;
  }

  interface SVGProps<T> extends SVGAttributes<T> {
    // Add any custom SVG attributes here
    className?: string;
    style?: React.CSSProperties;
  }
}
