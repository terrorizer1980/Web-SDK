import {
  Link as ReactRouterLink,
  LinkProps,
  useMatch,
  useResolvedPath
} from "react-router-dom";

export function Link({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <ReactRouterLink to={to} {...props}>
        {children}
      </ReactRouterLink>
      {match && " (active)"}
    </div>
  );
}
