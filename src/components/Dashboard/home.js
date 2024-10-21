import { useRef } from 'react';

const Home = () => {
    const form = useRef();

    const submitPortfolio = (e) => {
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];

        // Handle file submission logic here (upload to a server, etc.)
        console.log({
            name,
            description,
            url,
            image
        });
    }

    return (
        <div className="dashboard">
            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type="text" placeholder="Name" /></p>
                <p><textarea placeholder="Description" /></p>
                <p><input type="text" placeholder="Url" /></p>
                <p><input type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => console.log('Sign out')}>Sign out</button>
            </form>
        </div>
    );
}

export default Home;
