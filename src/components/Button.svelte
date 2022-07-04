<button type="submit" class="button-search">
    <slot />
</button>

<style>
    .button-search {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        background: #c14fac;
        border-radius: 8px;
        padding: 15px 24px;
        transition: background-color 0.2s;
        border: none;
        width: 154px;

        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #ffffff;
    }

    .button-search:hover {
        background: #b5369ca3;
    }
</style>
