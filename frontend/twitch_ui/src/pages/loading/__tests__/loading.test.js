import React from "react";
import Loading from '../components/loading';

it('renders', () => {
    const wrapper = shallow(
        <Loading />
    );
    expect(wrapper).toMatchSnapshot();
})
