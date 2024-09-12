// import Image from "next/image";
// import Link from "next/link";
// import logo from "@/public/LogoFilin.png";

// function Logo() {
//   return (
//     <Link href="/" className="flex items-center gap-4 z-10">
//       {/* <Image
//         src={logo}
//         alt="Filin Art logo"
//         width={200} // Указываем ширину
//         height={200} // Указываем высоту для резервирования места
//         className="object-contain w-auto h-auto" // Устанавливаем ширину и высоту как auto для сохранения пропорций
//         quality={80}
//       /> */}
//       <div className="relative w-full h-64">
//         {" "}
//         {/* Родительский контейнер */}
//         <Image
//           src={logo}
//           alt="Filin Art logo"
//           fill // Занимает всю ширину и высоту родителя
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-contain" // Сохраняет пропорции
//           quality={80}
//         />
//       </div>
//       {/* <Image
//   src="/images/logo.png"
//   alt="Logo"
//   width={200} // Указываем ширину
//   height={200} // Указываем высоту для резервирования места
//   className="object-contain w-auto h-auto" // Устанавливаем ширину и высоту как auto для сохранения пропорций
//   quality={80}
// /> */}
//     </Link>
//   );
// }

// export default Logo;

// import Image from "next/image";
// import Link from "next/link";
// import logo from "@/public/LogoFilin.png";

// function Logo() {
//   return (
//     <Link href="/" className="flex items-center gap-4 z-10">
//       <Image
//         src={logo}
//         alt="Filin Art logo"
//         className="w-48 h-auto" // Set a responsive width and auto height to maintain the aspect ratio
//         quality={80}
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px" // Adjust sizes for responsiveness
//       />
//     </Link>
// <Link href="/" className="flex items-center gap-4 z-10">
//   {/* Specify both width and height directly */}
//   <Image
//     src={logo}
//     alt="Filin Art logo"
//     width={200} // Set width
//     height={100} // Set height, maintain the aspect ratio
//     className="object-contain w-auto h-auto" // Maintain the aspect ratio with auto width and height
//     quality={80}
//   />
// </Link>
// <Link href="/" className="flex items-center gap-4 z-10">
//   {/* Define width and height directly */}
//   <Image
//     src={logo}
//     alt="Filin Art logo"
//     width={200}
//     height={200}
//     className="object-contain" // Ensures the image maintains its aspect ratio
//     quality={80}
//   />
// </Link>
//   );
// }

// export default Logo;

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/LogoFilin.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <div className="relative w-[200px] h-[200px]">
        {" "}
        {/* Adjust width and height */}
        <Image
          src={logo}
          alt="Filin Art logo"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={80}
        />
      </div>
    </Link>
  );
}

export default Logo;
