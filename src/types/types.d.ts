export namespace Rebrickable {
    interface Minifig {
      set_num: string,
      name: string,
      num_parts: number,
      set_img_url: string,
      set_url: string,
      last_modified_dt: string
    }

    interface Part {
        part_num: string,
        name: string,
        part_cat_id: number,
        part_url: string,
        part_img_url: string,
        external_ids: {
          [key: string]: string[]
        }
    }

    interface PartColor{
      id: number,
      name: string;
      rgb: string;
      is_trans: boolean;
      external_ids: Object;
    }

    interface FigParts {
      part: Part;
      id: number,
      inv_part_id: number,
      color: PartColor
      set_num: string,
      quantity: number,
      is_spare: boolean,
      element_id: string | null,
      num_sets: number
    }

    interface RebrickableAPIBase {
      count: number,
      next: string | null,
      previous: string | null,
    }

    interface MinifigResponse extends RebrickableAPIBase {
        results: Minifig[]
    }
    interface FigPartsResponse extends RebrickableAPIBase {
        results: FigParts[]
    }

    interface ShippingFormData {
      name: string;
      surname: string;
      phone: number;
      email: string;
      date: string;
      address: string;
      city: string;
      state: string;
      zipcode: string | number;
    }

    interface ShippingResponse{
      message: string;
    }
}