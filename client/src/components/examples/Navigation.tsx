import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="h-[200vh] bg-gradient-to-b from-gray-100 to-white">
      <Navigation />
      <div className="pt-32 px-8">
        <p className="text-muted-foreground">Scroll to see navigation background change</p>
      </div>
    </div>
  );
}
