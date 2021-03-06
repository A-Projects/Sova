const Size = {
    type: String,
    default: undefined,
    validator: (x) => {
        return [
            'xs',
            'sm',
            'md',
            'lg',
            'xl',
            'xxl'
        ].includes(x)
    }
};

const Shape = {
    type: String,
    validator: (x) => {
      return [
        'rounded',
        'rounded-top',
        'rounded-end',
        'rounded-bottom',
        'rounded-start',
        'rounded-circle',
        'rounded-pill',
        'rounded-0',
        'rounded-1',
        'rounded-2',
        'rounded-3'
      ].includes(x)
    },
};

const Color = {
    type: String,
    default: undefined,
    validator: (x) => {
        return [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
            'body',
            'white',
            'transparent',
            'link'
        ].includes(x)
    },
};

const Placement = {
    type: String,
    default: 'bottom-start',
    validator: (x) => {
        return [
            'auto',
            'auto-start',
            'auto-end',
            'top-end',
            'top',
            'top-start',
            'bottom-end',
            'bottom',
            'bottom-start',
            'right-start',
            'right',
            'right-end',
            'left-start',
            'left',
            'left-end'
        ].includes(x)
    },
};

const Gradient = {
    type: String,
    default: 'body',
    validator: (x) => {
        return [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark'
        ].includes(x)
    },
};

const TextColor = {
    type: String,
    default: undefined,
    validator: (x) => {
        return [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
            'body',
            'muted',
            'white',
            'black-50',
            'white-50'
        ].includes(x)
    },
}

export { Size, Shape, Color, Placement, Gradient, TextColor }