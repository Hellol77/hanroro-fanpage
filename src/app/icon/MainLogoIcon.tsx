import React from "react";

export default function MainLogoIcon({
  className,
  textColor,
  bgColor,
}: {
  className?: string;
  textColor: string;
  bgColor: string;
}) {
  return (
    <svg
      className={className}
      width="125"
      height="62"
      viewBox="0 0 125 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 34.5V0H80V26.5H115L125 44.5L115 61.5H21V34.5H0Z"
        fill={bgColor}
      />
      <path
        d="M52.8131 6.742C55.1959 6.742 57.5787 6.742 60.0337 6.742C61.1165 8.63307 62.1713 10.5256 63.1798 12.4528C63.3476 12.7732 63.516 13.0933 63.6847 13.4132C63.7393 13.5168 63.7938 13.6203 63.8501 13.727C64.3294 14.6287 64.8405 15.512 65.3655 16.3894C65.8101 17.14 65.3655 16.3894 66.131 17.4841C66.0219 17.4841 66.2369 17.4841 66.131 17.4841C66.131 13.9392 66.131 10.3943 66.131 6.742C67.9313 6.742 69.7317 6.742 71.5865 6.742C71.5902 9.29691 71.5931 11.8518 71.5949 14.4067C71.5957 15.5929 71.5968 16.7791 71.5987 17.9653C71.6002 18.9989 71.6013 20.0324 71.6016 21.0659C71.6019 21.6135 71.6023 22.1611 71.6035 22.7087C71.6048 23.319 71.6048 23.9293 71.6048 24.5396C71.6053 24.7224 71.6059 24.9053 71.6065 25.0937C71.6063 25.259 71.6061 25.4242 71.6058 25.5945C71.606 25.739 71.6061 25.8835 71.6063 26.0324C71.5865 26.3579 71.5865 26.3579 71.4261 26.5136C70.5888 26.5591 69.7512 26.5625 68.9127 26.5681C68.6302 26.5707 68.3478 26.5749 68.0653 26.5809C67.6585 26.5894 67.2519 26.5928 66.8449 26.5951C66.7189 26.5986 66.5928 26.6021 66.463 26.6058C65.8549 26.6035 65.5606 26.5791 65.111 26.1669C64.9805 25.9532 64.9805 25.9532 64.8474 25.7352C64.7719 25.6124 64.6964 25.4896 64.6187 25.3631C64.5489 25.2344 64.4792 25.1058 64.4074 24.9732C64.3268 24.8263 64.2463 24.6793 64.1633 24.528C64.078 24.3709 63.9926 24.2137 63.9047 24.0519C63.1588 22.6966 62.3899 21.3582 61.5881 20.0333C61.4936 19.8772 61.3991 19.7212 61.3018 19.5603C61.1213 19.2624 60.9406 18.9645 60.7599 18.6667C59.3559 16.3486 59.3559 16.3486 58.8503 15.3337C58.648 14.8273 58.648 14.8273 58.2686 14.6818C58.2686 18.5863 58.2686 22.4908 58.2686 26.5136C56.4683 26.5136 54.668 26.5136 52.8131 26.5136C52.8131 19.989 52.8131 13.4643 52.8131 6.742Z"
        fill={textColor}
      />
      <path
        d="M102.414 33.9474C102.6 33.9442 102.787 33.941 102.978 33.9377C105.508 33.9267 108.181 34.651 110.096 36.3216C110.213 36.4185 110.329 36.5154 110.449 36.6153C112.088 38.0757 113.171 40.021 113.353 42.1837C113.372 42.7076 113.38 43.2286 113.377 43.7527C113.375 44.0745 113.38 44.3959 113.385 44.7177C113.401 47.589 112.396 49.7222 110.361 51.8003C108.927 53.1524 107.507 53.7652 105.603 54.225C105.492 54.2538 105.38 54.2827 105.265 54.3125C104.305 54.5445 103.381 54.5963 102.394 54.5947C102.233 54.5945 102.073 54.5942 101.907 54.594C98.6039 54.5419 96.0783 53.4922 93.7822 51.1995C92.7405 50.0854 92.23 48.9697 91.8041 47.5307C91.7466 47.3723 91.6891 47.214 91.6298 47.0508C91.0265 44.9782 91.2656 42.1826 92.125 40.2136C92.2271 39.971 92.2271 39.971 92.3312 39.7235C92.8725 38.5618 93.6 37.6799 94.5318 36.7886C94.6187 36.7027 94.7056 36.6168 94.7951 36.5283C96.9487 34.5654 99.5528 33.9595 102.414 33.9474ZM98.9513 40.4544C98.2046 41.6062 98.1507 42.7754 98.1722 44.1057C98.1717 44.2658 98.1712 44.4259 98.1706 44.5909C98.1823 46.2116 98.3708 47.6625 99.5894 48.86C100.828 49.9002 102.083 49.8525 103.652 49.756C104.385 49.6592 104.822 49.312 105.282 48.7761C105.402 48.6541 105.521 48.5321 105.643 48.4064C106.564 47.0667 106.95 45.7388 106.937 44.1348C106.936 44.0124 106.935 43.8899 106.934 43.7637C106.904 42.3588 106.674 41.126 105.734 40.0147C104.549 38.9222 103.244 38.7443 101.669 38.7602C100.443 38.875 99.7513 39.6063 98.9513 40.4544Z"
        fill={textColor}
      />
      <path
        d="M67.0888 36.1026C69.3274 37.991 70.39 40.2104 70.6577 43.0664C70.8397 46.0529 70.1456 49.0282 68.217 51.4227C68.0114 51.6221 68.2423 51.3981 68.0565 51.5784C67.8706 51.7587 68.0492 51.5854 67.896 51.7341C65.4089 54.0297 61.901 54.6344 58.6102 54.5898C55.7166 54.4843 53.0986 53.4119 51.1061 51.3594C49.1764 49.1688 48.418 46.0327 48.603 43.209C48.9215 40.3037 50.2505 38.018 52.4941 36.1033C56.4428 33.0238 63.1505 33.0101 67.0888 36.1026ZM56.1827 40.3693C55.2753 41.5355 55.3473 42.8353 55.3403 44.2321C55.337 44.3944 55.3337 44.5566 55.3303 44.7238C55.3213 46.4652 55.7875 47.7695 56.985 49.0875C57.8103 49.8308 58.9134 49.8121 59.9861 49.8051C61.2035 49.7508 61.8886 49.3431 62.7175 48.4915C63.8125 47.204 64.1523 45.8224 64.1253 44.1835C64.1278 44.0328 64.1303 43.8821 64.1328 43.7268C64.1268 42.6416 63.8777 41.8129 63.4032 40.8363C63.3612 40.7341 63.3192 40.6319 63.2759 40.5266C62.8481 39.6165 62.0619 39.3229 61.1569 38.9681C59.222 38.3424 57.5266 38.9945 56.1827 40.3693Z"
        fill={textColor}
      />
      <path
        d="M8.84798 6.742C10.9131 6.742 12.9781 6.742 15.1058 6.742C15.1058 9.208 15.1058 11.674 15.1058 14.2147C17.1709 14.2147 19.2359 14.2147 21.3636 14.2147C21.3617 13.6883 21.3599 13.1619 21.358 12.6196C21.3567 12.1121 21.3557 11.6046 21.3548 11.0971C21.354 10.7433 21.3529 10.3894 21.3515 10.0356C21.3496 9.52824 21.3486 9.02087 21.3479 8.51349C21.3471 8.35425 21.3463 8.195 21.3454 8.03092C21.3454 7.88444 21.3454 7.73796 21.3454 7.58704C21.345 7.4574 21.3447 7.32776 21.3443 7.19419C21.3636 6.89769 21.3636 6.89769 21.5241 6.742C23.5891 6.742 25.6542 6.742 27.7819 6.742C27.7819 13.318 27.7819 19.894 27.7819 26.6693C25.6638 26.6693 23.5458 26.6693 21.3636 26.6693C21.3636 24.1519 21.3636 21.6345 21.3636 19.0409C19.2985 19.0409 17.2334 19.0409 15.1058 19.0409C15.1058 21.5582 15.1058 24.0756 15.1058 26.6693C13.0407 26.6693 10.9756 26.6693 8.84798 26.6693C8.84798 20.0933 8.84798 13.5173 8.84798 6.742Z"
        fill={textColor}
      />
      <path
        d="M30.8677 34.1218C31.0472 34.1214 31.2268 34.1209 31.4118 34.1204C31.608 34.1207 31.8042 34.121 32.0064 34.1213C32.2078 34.1212 32.4092 34.121 32.6167 34.1209C33.0451 34.1208 33.4735 34.121 33.9019 34.1217C34.338 34.1224 34.774 34.1224 35.21 34.1217C35.8403 34.1207 36.4706 34.1208 37.1009 34.1213C37.3893 34.1208 37.3893 34.1208 37.6836 34.1204C39.7455 34.1258 41.4738 34.1824 43.3462 35.0761C43.5776 35.1745 43.5776 35.1745 43.8137 35.2749C45.3627 35.9891 46.3634 37.2738 46.9364 38.8349C47.295 40.4247 47.1869 42.1899 46.3948 43.6386C45.6854 44.586 44.8802 45.3365 43.8513 45.9476C43.7605 46.0016 43.6157 45.9738 43.5066 45.9738C43.8244 46.7241 44.1823 47.4306 44.5997 48.1339C44.7264 48.3499 44.853 48.566 44.9796 48.7822C45.05 48.9022 45.1205 49.0223 45.1931 49.146C45.6739 49.9679 46.1494 50.7928 46.6255 51.6173C46.7242 51.7878 46.8229 51.9584 46.9247 52.1341C47.0177 52.2951 47.1107 52.4561 47.2065 52.6219C47.2898 52.7658 47.373 52.9098 47.4588 53.0581C47.6471 53.391 47.8244 53.7296 47.9994 54.0693C45.7755 54.0693 43.5515 54.0693 41.2602 54.0693C40.0222 51.8418 38.7848 49.6143 37.5697 47.3749C37.252 47.3749 36.9343 47.3749 36.607 47.3749C36.4252 48.0912 36.4114 48.7902 36.3957 49.5235C36.3928 49.639 36.3898 49.7545 36.3867 49.8735C36.3758 50.3023 36.3661 50.7311 36.3563 51.16C36.3331 52.12 36.3099 53.0801 36.2861 54.0693C34.168 54.0693 32.05 54.0693 29.8678 54.0693C29.8642 51.4941 29.8612 48.9188 29.8595 46.3436C29.8586 45.148 29.8575 43.9524 29.8557 42.7567C29.8541 41.715 29.853 40.6733 29.8527 39.6315C29.8525 39.0796 29.852 38.5277 29.8508 37.9757C29.8495 37.3606 29.8495 36.7455 29.8496 36.1303C29.849 35.946 29.8484 35.7617 29.8478 35.5718C29.848 35.4052 29.8483 35.2386 29.8485 35.067C29.8483 34.9213 29.8482 34.7757 29.848 34.6256C29.887 33.9788 30.2932 34.1223 30.8677 34.1218ZM36.4465 38.9681C36.2246 39.3988 36.2681 39.7481 36.2704 40.2294C36.2709 40.418 36.2714 40.6067 36.272 40.801C36.2733 40.9989 36.2746 41.1968 36.276 41.4007C36.2768 41.5997 36.2775 41.7988 36.2782 42.0039C36.2801 42.4969 36.2828 42.9899 36.2861 43.4829C38.3711 43.6376 38.3711 43.6376 40.2436 42.9514C40.8319 42.2737 40.8413 41.4232 40.8177 40.5772C40.7638 40.0726 40.6572 39.8067 40.2975 39.4352C39.4161 38.9836 38.7266 38.9069 37.7402 38.9389C37.6152 38.941 37.4901 38.9431 37.3613 38.9453C37.0563 38.9508 36.7514 38.9591 36.4465 38.9681Z"
        fill={textColor}
      />
      <path
        d="M72.5493 34.142C85.3945 34.142 85.3945 34.142 87.6322 36.0102C88.6332 37.2085 89.3036 38.3391 89.3972 39.9023C89.4076 40.0437 89.4179 40.1852 89.4286 40.331C89.4924 41.9151 89.1193 43.3695 88.0678 44.6104C87.5998 45.0759 87.1817 45.4475 86.5961 45.7673C86.4349 45.8182 86.1913 45.8182 86.0277 45.8182C86.4341 46.786 86.9215 47.7051 87.4216 48.6302C87.5499 48.8682 87.5499 48.8682 87.6808 49.111C88.2419 50.1465 88.819 51.17 89.4267 52.1804C89.6682 52.5846 89.9041 52.9907 90.1375 53.3992C90.2093 53.5249 90.2812 53.6505 90.3552 53.78C90.4097 53.8754 90.4643 53.9709 90.5204 54.0693C89.5784 54.1079 88.6368 54.1361 87.694 54.1548C87.3737 54.1626 87.0533 54.1733 86.7332 54.1867C84.0756 54.296 84.3236 54.4213 83.6226 53.8816C83.3677 53.4725 82.9654 52.9677 82.8185 52.5125C82.7098 52.3108 82.5966 52.1114 82.4775 51.9153C82.3768 51.7319 82.2765 51.5482 82.1767 51.3643C82.0958 51.2165 82.0958 51.2165 82.0133 51.0658C81.6691 50.4341 81.3385 49.7968 81.0134 49.1556C80.8668 48.8732 80.7198 48.5909 80.5721 48.3091C80.5186 48.2025 80.465 48.0959 80.4098 47.9862C80.2564 47.6926 80.2564 47.6926 79.9303 47.375C79.5596 47.375 79.189 47.375 78.8071 47.375C78.8071 49.5841 78.8071 51.7932 78.8071 54.0693C76.742 54.0693 74.6769 54.0693 72.5493 54.0693C72.5493 47.4933 72.5493 40.9173 72.5493 34.142ZM78.6466 38.9682C78.6466 40.458 78.6466 41.9479 78.6466 43.4829C80.8146 43.614 80.8146 43.614 82.648 42.7921C83.1202 42.2229 83.1645 41.7991 83.1695 41.0893C83.1718 40.9436 83.1741 40.7979 83.1764 40.6478C83.1346 40.1566 83.0845 39.8581 82.8185 39.4352C81.9242 38.9151 81.1226 38.9098 80.1008 38.939C79.6209 38.9486 79.141 38.9582 78.6466 38.9682Z"
        fill={textColor}
      />
      <path
        d="M38.8477 6.72681C39.0135 6.72703 39.1793 6.72725 39.3501 6.72748C39.8765 6.72834 40.4029 6.7303 40.9293 6.73228C41.2875 6.73306 41.6457 6.73377 42.0039 6.73441C42.8792 6.73612 43.7545 6.73872 44.6298 6.74201C44.6556 6.82568 44.6813 6.90934 44.7078 6.99554C46.0312 11.2929 47.377 15.5822 48.7716 19.8582C48.8653 20.1457 48.8653 20.1457 48.9609 20.4389C49.1393 20.9857 49.3179 21.5324 49.4968 22.0791C49.5493 22.2398 49.6019 22.4005 49.656 22.5661C49.7304 22.7929 49.7304 22.7929 49.8063 23.0243C49.8532 23.1677 49.9001 23.3111 49.9484 23.4588C50.0367 23.722 50.1281 23.9843 50.2231 24.2452C50.2659 24.3628 50.3087 24.4804 50.3528 24.6015C50.409 24.7507 50.409 24.7507 50.4664 24.9029C50.6106 25.4281 50.6577 25.9743 50.7272 26.5136C48.5562 26.5136 46.3852 26.5136 44.1484 26.5136C43.7953 25.4856 43.4795 24.4454 43.1857 23.4C41.0147 23.4 38.8437 23.4 36.607 23.4C36.2363 24.4275 35.8657 25.455 35.4838 26.5136C33.6305 26.5136 31.7772 26.5136 29.8678 26.5136C30.0483 25.2876 30.0483 25.2876 30.2394 24.6863C30.2819 24.5511 30.3245 24.4158 30.3683 24.2764C30.4145 24.1325 30.4607 23.9886 30.5084 23.8403C30.5568 23.6872 30.6052 23.5342 30.6551 23.3765C30.813 22.8781 30.9722 22.3801 31.1314 21.8821C31.2414 21.5361 31.3513 21.1902 31.4611 20.8442C31.7844 19.8275 32.1094 18.8114 32.4351 17.7954C32.5025 17.5851 32.5025 17.5851 32.5713 17.3706C33.4297 14.6941 34.3019 12.0219 35.1925 9.35527C35.4645 8.53945 35.7302 7.72433 35.9651 6.89769C36.9306 6.73333 37.869 6.72187 38.8477 6.72681ZM39.6556 12.0352C39.0592 13.8432 38.5427 15.6731 38.02 17.5022C37.872 18.0157 37.7207 18.5282 37.5697 19.0409C39.0523 19.0409 40.5349 19.0409 42.0625 19.0409C41.8745 18.1289 41.6936 17.2612 41.4407 16.3718C41.3853 16.1766 41.3299 15.9815 41.2727 15.7804C41.2443 15.6814 41.2159 15.5824 41.1866 15.4805C41.0992 15.176 41.0129 14.8713 40.9268 14.5665C40.6083 13.352 40.6083 13.352 40.137 12.1909C39.9782 12.1395 39.8193 12.0881 39.6556 12.0352Z"
        fill={textColor}
      />
    </svg>
  );
}