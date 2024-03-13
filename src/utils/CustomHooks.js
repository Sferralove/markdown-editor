import * as React from 'react';

/**
 * Custom Hook: useToggle()
 *
 * Credits: https://dev.to/arafat4693/15-useful-react-custom-hooks-that-you-can-use-in-any-project-2ll8
 *
 * @param defaultValue | boolean | True or False
 * @returns void
 *
 * The function accepts one parameter.
 * It sets the value to the boolean parameter if exists
 * Otherwise, it toggles the current value.
 *
 * How to use:
 *
 * const [isToggled, toggle] = useToggle(false);
 *
 */

export function useToggle(defaultValue) {
  const [isToggled, setIsToggled] = React.useState(defaultValue || false);

  function toggle(value) {
    setIsToggled((currentValue) =>
      typeof value === 'boolean' ? value : !currentValue
    );
  }

  return [isToggled, toggle];
}
