import { defineComponent, ref } from "vue";
import { Bar } from "./views/Bar";
import { Foot } from "./views/Foot";

export const App = defineComponent({
    setup() {

        return () => <>
            <router-link to="/">Go to Home</router-link>
            <router-link to="/about">Go to About</router-link>
            <router-view></router-view>
        </>

    }
});