import auth from "../firebase.init";

const useGetIdToken = async () => {
    const idToken = await auth.currentUser.getIdToken(true);
    return idToken;
};

export default useGetIdToken;
