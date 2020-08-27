import { mount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader";
import '@testing-library/jest-dom'

describe('AppHeader', () => {

    test("if a user is not logged in, do not show the logout button", () => {
        const wrapper = mount(AppHeader);
        expect(wrapper.find("button").element).not.toBeVisible()
    });

    test("if a user is logged in, show the logout button", async () => {
        const wrapper = mount(AppHeader);
        await wrapper.setData({ loggedIn: true })
        expect(wrapper.find("button").element).toBeVisible()
        
        //  Avoid setData
        // const wrapper = mount(AppHeader, {
        //     data() {
        //         return {
        //             loggedIn: true
        //         }
        //     }
        // })
        // await Vue.nextTick()
        // expect(wrapper.find("button").element).toBeVisible()
    });

    test("method: sum, return a + b", () => {
        const wrapper = mount(AppHeader);
        expect(wrapper.vm.sum(1, 2)).toBe(3);
    });
})