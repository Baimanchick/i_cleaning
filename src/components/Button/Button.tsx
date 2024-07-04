import { Button as ButtonAntd, Flex } from "antd";
import cn from "classnames";
import styles from "./button.module.scss";
import { ButtonProps } from "./Button.props";

export function Button({
  children,
  appearance,
  className,
  icon = "none",
  ...props
}: ButtonProps) {
  return (
    <ButtonAntd
      {...props}
      className={cn(styles.button, className, {
        [styles.blue]: appearance == "blue",
      })}
    >
      <Flex gap={"small"} align={"center"}>
        {icon != "none" && icon} {children}
      </Flex>
    </ButtonAntd>
  );
}
