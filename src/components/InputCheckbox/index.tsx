import React, { useRef } from "react"
import classNames from "classnames"

type InputCheckboxProps = {
  id: string | number
  checked?: boolean
  onChange: (newValue: boolean) => void
  disabled?: boolean
}

export const InputCheckbox: React.FC<InputCheckboxProps> = ({
  id,
  checked = false,
  disabled,
  onChange,
}) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
