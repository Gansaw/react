import MyDivArticle from './MyDivArticle';


const MyDiv = () => {

    return (

        <main className="container">
            <h1 className = 'mah1'>MyDiv</h1>
            <MyDivArticle />
            <MyDivArticle aname='MyDiv1' />
            <MyDivArticle aname='MyDiv2' />

        </main>

    );


};

export default MyDiv;