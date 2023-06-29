import { Outlet, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserContext } from "../context/UserContext";

export default function PrivateRoutes({ authorizedRoles }) {
  const [{ user }] = useUserContext();

  if (!user || !authorizedRoles.find((role) => role === user.role)) {
    return <Navigate to="/connexion" />;
  }

  return <Outlet />;
}

PrivateRoutes.propTypes = {
  authorizedRoles: PropTypes.string.isRequired,
};
