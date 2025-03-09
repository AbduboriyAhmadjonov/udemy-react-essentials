export default function Tabs({ children, buttons, ButtonsContainer }) {
  /** If we wanna set container values as built in component
   * like div, menu or etc we use it as string like this
   * ButtonsContainer="menu"
   * But if we wanna use our custom component we need to use like this
   * ButtonsContainer={CustomComponent}
   */

  // const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
