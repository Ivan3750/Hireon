export const metadata = {
    title: "Login - Hireon",
    description: "Login to Hireon to find the best jobs",
};

export default function LoginLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-white">
                {children}
            </body>
        </html>
    );
}
