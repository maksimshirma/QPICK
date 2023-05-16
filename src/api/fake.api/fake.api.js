const headphones = [
    {
        id: "headphones_1",
        img: "/images/Apple_BYZ_S852I.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
    },
    {
        id: "headphones_2",
        img: "/images/Apple_EarPods_1.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        id: "headphones_3",
        img: "/images/Apple_EarPods_2.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        id: "headphones_4",
        img: "/images/Apple_BYZ_S852I.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
    },
    {
        id: "headphones_5",
        img: "/images/Apple_EarPods_1.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        id: "headphones_6",
        img: "/images/Apple_EarPods_2.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
];

const wirelessHeadphones = [
    {
        id: "wirelessHeadphones_1",
        img: "/images/Apple_AirPods.png",
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
    },
    {
        id: "wirelessHeadphones_2",
        img: "/images/GERLAX_GH-04.png",
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.7,
    },
    {
        id: "wirelessHeadphones_3",
        img: "/images/BOROFONE_BO4.png",
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.5,
    },
];

export const fetchWirelessHeadphones = () => new Promise((resolve) => {
        window.setTimeout(() => resolve(wirelessHeadphones), 100);
    })

export const fetchHeadpnones = () => new Promise((resolve) => {
        window.setTimeout(() => resolve(headphones), 100);
    })

export const fetchCart = () => new Promise((resolve) => {
    const arr = [];
    wirelessHeadphones.forEach(product => {
        Object.keys(sessionStorage).forEach(key => {
            if (product.id === key) {
                arr.push({ ...product, count: +sessionStorage.getItem(key) });
            }
        })
    });
    headphones.forEach(product => {
        Object.keys(sessionStorage).forEach(key => {
            if (product.id === key) {
                arr.push({ ...product, count: +sessionStorage.getItem(key) });
            }
        })
    });
    window.setTimeout(() => resolve(arr), 100);
})