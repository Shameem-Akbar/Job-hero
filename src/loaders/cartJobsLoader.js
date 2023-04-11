import { getJobCart } from "../Utilities/fakeDb";

const cartJobsLoader = async () => {
    const loadedJobs = await fetch('/jobData.json');
    const jobs = await loadedJobs.json();


    const storedCart = getJobCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedJob = jobs.find(job => job.id == id)
        if (addedJob) {
            savedCart.push(addedJob);
        }
    }
    return savedCart;
}

export default cartJobsLoader;