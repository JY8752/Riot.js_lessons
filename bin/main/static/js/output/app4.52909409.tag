<app4>
    <div class="app-header">
        <div class="header-left">
            <img src="https://riot.js.org/img/logo/square.svg" alt="Riot.js logo" class="logo">
        </div>
    </div>
    <div class="header-right">
        <h1>{ props.title }</h1>
    </div>
    <su-checkbox-group
        name="checkbox-group"
        value={ checkboxGroupValue}
        onchange={ handleChange}
    >
        <su-checkbox value="1">Checkbox 1</su-checkbox>
        <su-checkbox value="2">Checkbox 2</su-checkbox>
        <su-checkbox value="3">Checkbox 3</su-checkbox>
    </su-checkboxGroupValue>
    <div>
        <button
            type="button"
            class="ui button"
            onclick={ () => checkSelectCheckbox([1, 2]) }
        >Check 1,2</button>
        <button
            type="button"
            class="ui button"
            onclick={ () => checkSelectCheckbox([1, 2, 3]) }
        >Check all</button>
        <button
            type="button"
            class="ui button"
            onclick={ () => checkSelectCheckbox([]) }
        >Clear all</button>
    </div>

    <script>
        export default {
            onBeforeMount() {

            },
            checkSelectCheckbox(value) {
                if(value.length === 0) {
                    this.$$('input[type="checkbox"]').forEach(item => {
                        item.checked = false
                    })
                }
                this.checkboxGroupValue = value
                this.update()
            }
        }
    </script>

</app4>