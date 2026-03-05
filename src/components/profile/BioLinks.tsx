export function BioLinks({ lightMode }: { lightMode?: boolean }) {
  const color = lightMode ? "white" : "black";
  return (
    <div
      className="flex flex-col px-5 mt-[-18px]"
      style={{ gap: 0 }}
    >
      {/* Line 1 - Bio text */}
      <div className="flex items-center" style={{ height: 18 }}>
        <span
          className="font-sans text-[13px] font-normal leading-[18.2px]"
          style={{ letterSpacing: 0, color }}
        >
          Love adventures in life
        </span>
      </div>
      {/* Line 2 - Contact */}
      <div className="flex items-center" style={{ height: 18 }}>
        <span
          className="font-sans text-[13px] font-normal leading-[18.2px]"
          style={{ letterSpacing: 0, color }}
        >
          {'Contact me: erikagelinda@gmail.com'}
        </span>
      </div>
      {/* Link */}
      <div className="flex items-center gap-1" style={{ height: 18 }}>
        <span
          className="font-sans text-[13px] font-semibold leading-[18.2px]"
          style={{ letterSpacing: 0, color }}
        >
          lemon8-app.com/erikagelinda
        </span>
      </div>

      {/* Capsules Section */}
      <div className="flex items-center gap-2 mt-2">
        {/* Watch History Capsule */}
        <div 
          className="flex items-center h-[29px] w-fit px-3 rounded-full gap-1 border-[0.5px] backdrop-blur-md"
          style={{ 
            borderColor: lightMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.1)',
            backgroundColor: 'transparent'
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99805 0.5C9.03553 0.5 11.4979 2.96255 11.498 6C11.498 9.03757 9.03561 11.5 5.99805 11.5C2.96048 11.5 0.498047 9.03757 0.498047 6C0.498179 2.96255 2.96056 0.5 5.99805 0.5ZM5.87305 2.625C5.52787 2.625 5.24805 2.90482 5.24805 3.25V5.82617C5.24826 6.29815 5.49036 6.73757 5.88965 6.98926L7.54004 8.02832C7.83198 8.21221 8.2173 8.12482 8.40137 7.83301C8.58536 7.54103 8.49795 7.15575 8.20605 6.97168L6.55664 5.93164C6.5205 5.90886 6.49826 5.86887 6.49805 5.82617V3.25C6.49805 2.90482 6.21822 2.625 5.87305 2.625Z" fill="url(#paint0_linear_watch_history)"/>
            <defs>
              <linearGradient id="paint0_linear_watch_history" x1="9.52796" y1="11.5575" x2="9.52796" y2="0.441379" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5A0FF"/>
                <stop offset="0.716346" stopColor="#FE2C55"/>
              </linearGradient>
            </defs>
          </svg>
          <span 
            className="font-sans text-[12px] font-medium"
            style={{ color }}
          >
            Watch history
          </span>
        </div>

        {/* Your Orders Capsule */}
        <div 
          className="flex items-center h-[29px] w-fit px-3 rounded-full gap-1 border-[0.5px] backdrop-blur-md"
          style={{ 
            borderColor: lightMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.1)',
            backgroundColor: 'transparent'
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_orders)">
              <path d="M4.09082 9.7002C4.67762 9.7002 5.15332 10.1759 5.15332 10.7627C5.15319 11.3494 4.67754 11.8252 4.09082 11.8252C3.5041 11.8252 3.02845 11.3494 3.02832 10.7627C3.02832 10.1759 3.50402 9.7002 4.09082 9.7002ZM9.39551 9.7002C9.98231 9.7002 10.458 10.1759 10.458 10.7627C10.4579 11.3494 9.98223 11.8252 9.39551 11.8252C8.80879 11.8252 8.33314 11.3494 8.33301 10.7627C8.33301 10.1759 8.80871 9.7002 9.39551 9.7002ZM1.36816 0.375C1.62798 0.377438 1.92482 0.395821 2.19531 0.507812C2.47887 0.625287 2.72615 0.816137 2.91309 1.05957C3.1506 1.36903 3.24134 1.76544 3.32031 2.05957L3.46191 2.58887H9.9668C10.1524 2.58887 10.33 2.58873 10.4766 2.60156C10.6281 2.61484 10.8112 2.64671 10.9883 2.75098C11.1986 2.87486 11.3645 3.06072 11.4629 3.28223L11.501 3.37891L11.5381 3.52246C11.5635 3.66379 11.5561 3.7969 11.543 3.91016C11.5259 4.05627 11.4896 4.23042 11.4521 4.41211L10.9551 6.8252C10.9022 7.08204 10.8567 7.30624 10.8047 7.48926C10.7506 7.6794 10.6789 7.86543 10.5566 8.03906C10.3718 8.30129 10.1184 8.50776 9.82422 8.63574C9.62944 8.72045 9.43352 8.75297 9.23633 8.76758C9.04649 8.78163 8.81808 8.78125 8.55566 8.78125H5.10254C4.84604 8.78125 4.62256 8.78117 4.43652 8.76758C4.24314 8.75344 4.05103 8.72234 3.85938 8.64062C3.5694 8.51692 3.31766 8.31717 3.13184 8.0625C3.00923 7.89438 2.93619 7.71429 2.87891 7.5293C2.82377 7.35112 2.77358 7.1327 2.71582 6.88281L1.96191 3.62207C1.92121 3.55413 1.88876 3.47968 1.86719 3.39941L1.62988 2.51367C1.57691 2.31642 1.54798 2.21229 1.52246 2.13867C1.52153 2.13598 1.5204 2.13327 1.51953 2.13086C1.51743 2.13069 1.51499 2.13102 1.5127 2.13086C1.43498 2.12531 1.32728 2.125 1.12305 2.125H0.836914C0.474895 2.125 0.163363 1.90527 0.0302734 1.5918C-0.0396741 1.49567 -0.0819789 1.37806 -0.0820312 1.25C-0.0820312 1.1217 -0.0398598 1.00347 0.0302734 0.907227C0.16346 0.593974 0.475054 0.375 0.836914 0.375H1.36816Z" fill="url(#paint0_linear_orders)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_orders" x1="9.47084" y1="12.2542" x2="9.47084" y2="0.312023" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5A0FF"/>
                <stop offset="0.716346" stopColor="#FE2C55"/>
              </linearGradient>
              <clipPath id="clip0_orders">
                <rect width="12" height="12" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span 
            className="font-sans text-[12px] font-medium"
            style={{ color }}
          >
            Your orders
          </span>
        </div>
      </div>
    </div>
  )
}
