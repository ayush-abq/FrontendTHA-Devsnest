const Image = () => {
    return (
        <img src="https://humornama.com/wp-content/uploads/2020/11/Aurat-Ka-Chakkar-Babu-Bhaiya-meme-template-of-Hera-Pheri-1024x576.jpg" alt="" />
    );
};


const Card = () => {



    return (
        <div className="card">
            <Image />
            <h2>React Card</h2>
            <p>This is a card</p>
        </div>

    );
};

export default Card;