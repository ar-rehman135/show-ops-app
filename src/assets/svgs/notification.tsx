import { cn } from '@/lib/cn';

export const NotificationIcon = ({
  className,
  ...props
}: React.ComponentProps<'svg'>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="currentColor"
      className={cn('h-6 w-6', className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" fill="white" fill-opacity="0.01" />
      <path
        d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
        fill="#002000"
        fill-opacity="0.0627451"
      />
      <rect
        width="18"
        height="18"
        transform="translate(11 11)"
        fill="white"
        fill-opacity="0.01"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.3215 12.5009C21.3215 13.1054 20.9153 13.615 20.3611 13.7718C23.1751 13.9576 25.4 16.2989 25.4 19.1599V23.2999C25.4 24.2675 25.4395 25.0488 26.2683 25.4633C26.5172 25.5877 26.6479 25.867 26.5839 26.1378C26.52 26.4086 26.2783 26.5999 26 26.5999H20.7937C21.0429 26.8198 21.2 27.1415 21.2 27.4999C21.2 28.1627 20.6627 28.6999 20 28.6999C19.3372 28.6999 18.8 28.1627 18.8 27.4999C18.8 27.1415 18.9571 26.8198 19.2062 26.5999H14C13.7217 26.5999 13.48 26.4086 13.416 26.1378C13.3521 25.867 13.4828 25.5877 13.7317 25.4633C14.5605 25.0488 14.6 24.2675 14.6 23.2999V19.1599C14.6 16.2984 16.8258 13.9567 19.6405 13.7717C19.0864 13.6148 18.6804 13.1053 18.6804 12.5009C18.6804 11.7716 19.2717 11.1804 20.001 11.1804C20.7303 11.1804 21.3215 11.7716 21.3215 12.5009ZM20 14.9599C17.6804 14.9599 15.8 16.8403 15.8 19.1599V23.2999L15.8 23.361C15.8006 23.8955 15.8015 24.69 15.4392 25.3999H24.5608C24.1986 24.69 24.1994 23.8955 24.2 23.361V23.2999V19.1599C24.2 16.8403 22.3196 14.9599 20 14.9599Z"
        fill="#60655F"
      />
    </svg>
  );
};
