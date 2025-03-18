import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"

const DashboardComponent = () => {
    return (
        <>
            <Navbar />
            <section className="container max-w-7xl mx-auto">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </section>
            <section className="container max-w-7xl mx-auto mt-[10px] flex flex-col gap-[10px]">
                <h2 className="text-center">Cards</h2>

                <div className="container flex flex-col md:flex-row justify-evenly items-center">
                    <div className="rounded-8 container flex flex-col w-full md:w-[200px] lg:w-[350px] xl:w-[400px] pl-[10px] pr-[10px]">
                        <img src="https://cpr.joinadcentralsites.com/assets/img/home/info-02-alt.webp?v=1741993672230" />
                        <p className="text-center md:text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                    <div className="rounded-8 container flex flex-col w-full md:w-[200px] lg:w-[350px] xl:w-[400px] pl-[10px] pr-[10px]">
                        <img src="https://cpr.joinadcentralsites.com/assets/img/home/info-02-alt.webp?v=1741993672230" />
                        <p className="text-center md:text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                    <div className="rounded-8 container flex flex-col w-full md:w-[200px] lg:w-[350px] xl:w-[400px] pl-[10px] pr-[10px]">
                        <img src="https://cpr.joinadcentralsites.com/assets/img/home/info-02-alt.webp?v=1741993672230" />
                        <p className="text-center md:text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                </div>
            </section>
            <div className="container max-w-7xl mx-auto">
                <img src="https://cpr.joinadcentralsites.com/assets/img/about-us/problem-solvers-640w.webp?v=1741020403601" />
            </div>
            <Footer />
        </>
    )
}

export default DashboardComponent