import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
        <p className="text-gray-400 mt-2 text-sm">Please provide the footer screenshot to update this design.</p>
      </div>
    </footer>
  );
}
