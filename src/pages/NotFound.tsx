import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you’re looking for does not exist.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
