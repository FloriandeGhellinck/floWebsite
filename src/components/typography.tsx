/** @format */

import clsx from "clsx";

const Typography = {
  h1: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"h1">) => (
    <h1
      className={clsx("font-poppins font-bold text-color-primary-light text-[28px] leading-8 lg:text-5xl lg:leading-[65px]", className)}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className={clsx("font-poppins font-bold text-primary-light text-2xl leading-7 lg:text-[28px] lg:leading-8", className)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className={clsx("font-poppins font-bold text-primary-light text-lg leading-[22px] lg:text-2xl lg:leading-7", className)} {...props}>
      {children}
    </h3>
  ),
  h4: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"h4">) => (
    <h4
      className={clsx("font-poppins font-bold  text-primary-light text-[17px] leading-[21px] lg:text-lg lg:leading-[22px]", className)}
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"p">) => (
    <p className={clsx("font-montserrat text-base font-normal text-embie-blue dark:text-embie-gray-md", className)} {...props}>
      {children}
    </p>
  ),
  pmd: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"p">) => (
    <p className={clsx("font-montserrat text-base font-medium text-embie-blue dark:text-embie-gray-md", className)} {...props}>
      {children}
    </p>
  ),
  note: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"p">) => (
    <p className={clsx("font-montserrat text-xs leading-[18px] font-normal text-embie-blue dark:text-embie-gray-md", className)} {...props}>
      {children}
    </p>
  ),
};

export default Typography;
