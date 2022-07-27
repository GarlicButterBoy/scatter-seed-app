class GardenBed {
  height: number;
  width: number;
  topY: number;
  leftX: number;
  rightX: number;
  bottomY: number;
  name: string;
  id: number;
  notes: string;

  constructor(x1: number, y1: number, x2: number, y2: number, name: string, id = -1, notes = "") {
    if (x1 <= x2) {
      this.leftX = x1;
      this.rightX = x2;
    } else {
      this.leftX = x2;
      this.rightX = x1;
    }
    if (y1 <= y2) {
      this.topY = y1;
      this.bottomY = y2;
    } else {
      this.topY = y2;
      this.bottomY = y1;
    }

    this.height = Math.abs(y2 - y1) + 1;
    this.width = Math.abs(x2 - x1) + 1;
    this.name = name;
    this.id = id;
    this.notes = notes;
  }

  didTouch(posX: number, posY: number) {
    if (
      posX >= this.leftX &&
      posX < this.leftX + this.width &&
      posY >= this.topY &&
      posY < this.topY + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }
  doesIntersect(otherbed: GardenBed) {
    if (
      this.didTouch(otherbed.leftX, otherbed.topY) ||
      this.didTouch(otherbed.leftX + otherbed.width - 1, otherbed.topY) ||
      this.didTouch(otherbed.leftX, otherbed.topY + otherbed.height - 1) ||
      this.didTouch(otherbed.leftX + otherbed.width - 1, otherbed.topY + otherbed.height - 1) ||
      otherbed.didTouch(this.leftX, this.topY) ||
      otherbed.didTouch(this.leftX + this.width - 1, this.topY) ||
      otherbed.didTouch(this.leftX, this.topY + this.height - 1) ||
      otherbed.didTouch(this.leftX + this.width - 1, this.topY + otherbed.height - 1)
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default GardenBed;
