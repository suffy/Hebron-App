import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./../configs/FirebaseConfig";

const GetFavList = async (user) => {
  const docSnap = await getDoc(
    doc(db, "HebronFav", user?.primaryEmailAddress?.emailAddress)
  );

  if (docSnap?.exists()) {
    return docSnap.data();
  } else {
    await setDoc(
      doc(db, "HebronFav", user?.primaryEmailAddress?.emailAddress),
      {
        email: user?.primaryEmailAddress?.emailAddress,
        favorites: [],
      }
    );
  }
};

const UpdateFav = async (user, favorites) => {
  const docRef = doc(db, "HebronFav", user?.primaryEmailAddress?.emailAddress);
  try {
    await updateDoc(docRef, {
      favorites: favorites,
    });
  } catch (e) {
    console.log(e);
  }
};

export default {
  GetFavList,
  UpdateFav,
};
