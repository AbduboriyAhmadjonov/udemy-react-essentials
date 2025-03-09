export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  /** If we wanna set container values as built in component
   * like div, menu or etc we use it as string like this
   * ButtonsContainer="menu"
   *
   * But if we wanna use our custom component we need to use like this
   * ButtonsContainer={CustomComponent}
   *
   * Or we can use it by default cause most of the time we need just menu element
   * ButtonsContainer = 'menu'
   */

  // const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
