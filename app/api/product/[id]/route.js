import {NextResponse} from "next/server";

export async function GET (req, {params}) {
    const {id} = params;

    return NextResponse.json({
        id: id,
        name: "Sample Product",
        price: 19.99,
        description: "This is a sample product description.",
    });
}
