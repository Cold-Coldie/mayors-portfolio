import NavBar from "./component/navbar/NavBar";
import "./globals.css";

export const metadata = {
  title: "Home Page | Mayor's Portfolio",
  description: "Mayor's Portfolio Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
