import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { useLocation, Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import React from "react";

const formatLabel = (str: string) => {
  return str
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export function PathBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean); // Split and remove empty strings

  return (
    <React.Fragment>
      {!["/", "/account"].includes(location.pathname) && (
        <MaxWidthWrapper className="mt-3 md:mt-4">
          <Breadcrumb>
            <BreadcrumbList className="!gap-1">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">
                    <img
                      className="size-[18px] object-cover"
                      src="/icons/home-icon.svg"
                      alt="home icon"
                    />
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {pathnames.map((pathname, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;

                return (
                  <div key={routeTo} className="flex items-center">
                    <BreadcrumbSeparator className="mr-0.5" />
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage>{formatLabel(pathname)}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={routeTo}>{formatLabel(pathname)}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </MaxWidthWrapper>
      )}
    </React.Fragment>
  );
}
