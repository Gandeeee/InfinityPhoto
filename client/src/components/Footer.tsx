export default function Footer() {
  return (
    <footer className="py-12 px-8 bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="font-serif text-3xl font-light mb-4">INFINITY PHOTO</h3>
        <p className="text-sm opacity-80 mb-6">
          Capturing timeless moments with artistic excellence
        </p>
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} Infinity Photo. All rights reserved. Based in Bali, Indonesia.
        </p>
      </div>
    </footer>
  );
}
