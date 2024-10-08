import { buttonVariants } from "@/components/ui/button";
import { List } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import MaxWidthWrapper from "../MaxWidthWrapper";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import useApi from "@/hooks/useApi";
import { useEffect, useState } from "react";
import { CategoryType } from "@/types/global";

const navigationLinks = [
  { name: "Trending", path: "/trending" },
  { name: "Brands", path: "/brands" },
  { name: "Campaign", path: "/campaign" },
  { name: "Featured", path: "/featured" },
  { name: "Customer Service", path: "/customer-service" },
];

export function Navbar() {
  const { apiRequest } = useApi();
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiRequest<CategoryType[]>(
          "/api/v1/categoriess",
          "GET"
        );
        setCategories(data || []);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // console.log("categories", categories);

  return (
    <section className="bg-white/75 backdrop-blur-lg hidden md:block py-2">
      <MaxWidthWrapper>
        <nav>
          <ul className="flex items-center space-x-6 lg:space-x-10 font-medium">
            <li>
              <Menubar className="p-0 border-none h-full">
                <MenubarMenu>
                  <MenubarTrigger
                    className={`${buttonVariants({
                      size: "sm",
                    })} cursor-pointer data-[state=open]:bg-primary data-[state=open]:text-white focus:bg-primary focus:text-white bg-gradient-primary`}
                  >
                    <List className="mr-2 h-4 w-4" />
                    Categories
                  </MenubarTrigger>
                  <MenubarContent>
                    {categories?.map((category) => (
                      <MenubarSub key={category.id}>
                        <Link to={category.slug}>
                          <MenubarSubTrigger className="cursor-pointer">
                            {category.name}
                          </MenubarSubTrigger>
                        </Link>

                        <MenubarSubContent>
                          {category.subcategories?.map((sub) => (
                            <Link key={sub.id} to={sub.slug}>
                              <MenubarItem className="cursor-pointer">
                                {sub.name}
                              </MenubarItem>
                            </Link>
                          ))}
                        </MenubarSubContent>
                      </MenubarSub>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </li>
            {navigationLinks.map((link) => (
              <li className="group relative w-max" key={link.name}>
                <NavLink
                  className={({ isActive }) =>
                    `text-sm ${isActive ? "border-b-2 border-primary" : ""}`
                  }
                  to={link.path}
                >
                  {link.name}
                </NavLink>
                <span className="absolute -bottom-0 left-0 w-0 transition-all min-h-[1px] bg-primary group-hover:w-full group-hover:rounded-full ease-in-out" />
              </li>
            ))}
          </ul>
        </nav>
      </MaxWidthWrapper>
    </section>
  );
}
