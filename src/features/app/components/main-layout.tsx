import { Sidebar } from "./sidebar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-5 bg-muted/40">
      <Sidebar className="hidden lg:block bg-background" />
      <div className="col-span-3 lg:col-span-4 lg:border-l">{children}</div>
    </div>
  );
}
