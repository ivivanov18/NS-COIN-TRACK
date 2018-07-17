declare module com {
	export module telerik {
		export module android {
			export module common {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class CollectionChangeAction {
					public static ADD: com.telerik.android.common.CollectionChangeAction;
					public static REMOVE: com.telerik.android.common.CollectionChangeAction;
					public static RESET: com.telerik.android.common.CollectionChangeAction;
					public static REPLACE: com.telerik.android.common.CollectionChangeAction;
					public static MOVE: com.telerik.android.common.CollectionChangeAction;
					public static valueOf(param0: string): com.telerik.android.common.CollectionChangeAction;
					public static values(): native.Array<com.telerik.android.common.CollectionChangeAction>;
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class CollectionChangeListener {
					/**
					 * Constructs a new instance of the com.telerik.android.common.CollectionChangeListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
					});
					public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
				}
			}
		}
	}
}

import javautilList = java.util.List;
/// <reference path="./com.telerik.android.common.CollectionChangeAction.d.ts" />
/// <reference path="./com.telerik.android.common.ObservableCollection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class CollectionChangedEvent {
					public getSource(): com.telerik.android.common.ObservableCollection;
					public getOldItems(): javautilList<javalangObject>;
					public constructor(param0: com.telerik.android.common.ObservableCollection, param1: com.telerik.android.common.CollectionChangeAction);
					public getNewIndex(): number;
					public getOldIndex(): number;
					public constructor(param0: com.telerik.android.common.ObservableCollection, param1: com.telerik.android.common.CollectionChangeAction, param2: javautilList<javalangObject>, param3: javautilList<javalangObject>, param4: number, param5: number);
					public getNewItems(): javautilList<javalangObject>;
					public action(): com.telerik.android.common.CollectionChangeAction;
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class DataTuple {
					public firstValue: javalangObject;
					public secondValue: javalangObject;
					public thirdValue: javalangObject;
					public toString(): string;
					public constructor(param0: javalangObject, param1: javalangObject, param2: javalangObject);
					public constructor(param0: javalangObject, param1: javalangObject);
					public constructor(param0: javalangObject);
				}
			}
		}
	}
}

import javautilCalendar = java.util.Calendar;
/// <reference path="./com.telerik.android.common.TimeSpan.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class DateTimeExtensions {
					public static getQuarterOfYear(param0: javautilCalendar): number;
					public static getSecondOfYear(param0: javautilCalendar): number;
					public constructor();
					public static getMinuteOfYear(param0: javautilCalendar): number;
					public static getHourOfYear(param0: javautilCalendar): number;
					public static subtract(param0: javautilCalendar, param1: javautilCalendar): com.telerik.android.common.TimeSpan;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class DependencyPropertyChangedListener {
					/**
					 * Constructs a new instance of the com.telerik.android.common.DependencyPropertyChangedListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onPropertyChanged(param0: javalangObject, param1: number, param2: javalangObject): void;
					});
					public onPropertyChanged(param0: javalangObject, param1: number, param2: javalangObject): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class Function {
					/**
					 * Constructs a new instance of the com.telerik.android.common.Function interface with the provided implementation.
					 */
					public constructor(implementation: {
						apply(param0: javalangObject): javalangObject;
					});
					public apply(param0: javalangObject): javalangObject;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class Function2 {
					/**
					 * Constructs a new instance of the com.telerik.android.common.Function2 interface with the provided implementation.
					 */
					public constructor(implementation: {
						apply(param0: javalangObject, param1: javalangObject): javalangObject;
					});
					public apply(param0: javalangObject, param1: javalangObject): javalangObject;
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.Procedure.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class Function2Async {
					/**
					 * Constructs a new instance of the com.telerik.android.common.Function2Async interface with the provided implementation.
					 */
					public constructor(implementation: {
						apply(param0: javalangObject, param1: javalangObject, param2: com.telerik.android.common.Procedure): void;
					});
					public apply(param0: javalangObject, param1: javalangObject, param2: com.telerik.android.common.Procedure): void;
				}
			}
		}
	}
}

import javautilArrayList = java.util.ArrayList;
import javautilCollection = java.util.Collection;
/// <reference path="./com.telerik.android.common.CollectionChangeListener.d.ts" />
/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class ObservableCollection extends javautilArrayList<javalangObject> {
					public addCollectionChangeListener(param0: com.telerik.android.common.CollectionChangeListener): void;
					public remove(param0: number): javalangObject;
					public removeRange(param0: number, param1: number): void;
					public add(param0: number, param1: javalangObject): void;
					public addAll(param0: number, param1: javautilCollection<javalangObject>): boolean;
					public addAll(param0: javautilCollection<javalangObject>): boolean;
					public notifyListeners(param0: com.telerik.android.common.CollectionChangedEvent): void;
					public removeCollectionChangeListener(param0: com.telerik.android.common.CollectionChangeListener): void;
					public add(param0: javalangObject): boolean;
					public remove(param0: javalangObject): boolean;
					public removeAll(param0: javautilCollection<javalangObject>): boolean;
					public constructor();
					public clear(): void;
					public beginUpdate(): void;
					public endUpdate(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class Orientation {
					public static HORIZONTAL: com.telerik.android.common.Orientation;
					public static VERTICAL: com.telerik.android.common.Orientation;
					public static valueOf(param0: string): com.telerik.android.common.Orientation;
					public static values(): native.Array<com.telerik.android.common.Orientation>;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class Procedure {
					/**
					 * Constructs a new instance of the com.telerik.android.common.Procedure interface with the provided implementation.
					 */
					public constructor(implementation: {
						apply(param0: javalangObject): void;
					});
					public apply(param0: javalangObject): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class Procedure2 {
					/**
					 * Constructs a new instance of the com.telerik.android.common.Procedure2 interface with the provided implementation.
					 */
					public constructor(implementation: {
						apply(param0: javalangObject, param1: javalangObject): void;
					});
					public apply(param0: javalangObject, param1: javalangObject): void;
				}
			}
		}
	}
}

import javautilHashMap = java.util.HashMap;
/// <reference path="./com.telerik.android.common.DependencyPropertyChangedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export abstract class PropertyManager extends javalangObject {
					public static LOCAL_VALUE: number;
					public static PALETTE_VALUE: number;
					public static DEFAULT_VALUE: number;
					public static UNSET_VALUE: javalangObject;
					public static registerProperty(param0: javalangObject, param1: com.telerik.android.common.DependencyPropertyChangedListener): number;
					public resetPropertyValue(param0: number): void;
					public constructor();
					public getValue(param0: number): javalangObject;
					public setValue(param0: number, param1: javalangObject): void;
					public setValue(param0: number, param1: number, param2: javalangObject): void;
				}
				export module PropertyManager {
					export class PropertyBag {
						public constructor(param0: javalangObject);
						public resolveValue(): javalangObject;
						public setValueForKey(param0: number, param1: javalangObject): void;
					}
					export class PropertyMetadata {
						public propertyBags: javautilHashMap<javalangObject, javalangObject>;
						public constructor(param0: javalangObject, param1: com.telerik.android.common.DependencyPropertyChangedListener);
						public defaultValue(): javalangObject;
						public getListener(): com.telerik.android.common.DependencyPropertyChangedListener;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class RadThickness {
					public left: number;
					public top: number;
					public right: number;
					public bottom: number;
					public constructor(param0: number, param1: number, param2: number, param3: number);
					public constructor();
					public equals(param0: javalangObject): boolean;
					public clone(): com.telerik.android.common.RadThickness;
					public static getEmpty(): com.telerik.android.common.RadThickness;
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class TestAPI {
					public showToast(param0: androidcontentContext): void;
					public constructor();
					public showToast3(param0: androidcontentContext): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class TimeSpan {
					public static fromDays(param0: number): com.telerik.android.common.TimeSpan;
					public static fromMinutes(param0: number): com.telerik.android.common.TimeSpan;
					public static fromHours(param0: number): com.telerik.android.common.TimeSpan;
					public constructor(param0: javautilCalendar, param1: javautilCalendar);
					public constructor();
					public getMillis(): number;
					public compareTo(param0: javalangObject): number;
					public static fromMilliseconds(param0: number): com.telerik.android.common.TimeSpan;
					public static fromSeconds(param0: number): com.telerik.android.common.TimeSpan;
					public getTotalDays(): number;
					public static getZero(): com.telerik.android.common.TimeSpan;
				}
			}
		}
	}
}

import androidgraphicsRectF = android.graphics.RectF;
import androidgraphicsRect = android.graphics.Rect;
import androidviewView = android.view.View;
import javalangClass = java.lang.Class;
import androidappActivity = android.app.Activity;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export class Util {
					public static getLayoutPart(param0: androidappActivity, param1: number, param2: javalangClass<javalangObject>, param3: boolean): javalangObject;
					public static getLayoutPart(param0: androidappActivity, param1: number, param2: javalangClass<javalangObject>): javalangObject;
					public static generateDummyText(param0: string): string;
					public static Equals(param0: javalangObject, param1: javalangObject): boolean;
					public static getSP(param0: number): number;
					public static isNullOrEmpty(param0: string): boolean;
					public static toString(param0: javalangObject): string;
					public static getLayoutPart(param0: androidviewView, param1: number, param2: javalangClass<javalangObject>): javalangObject;
					public static RectFToRect(param0: androidgraphicsRectF): androidgraphicsRect;
					public static getDimen(param0: number, param1: number): number;
					public constructor();
					public static convertToRectF(param0: com.telerik.android.common.math.RadRect): androidgraphicsRectF;
					public static generateViewId(): number;
					public static getLayoutPart(param0: androidviewView, param1: number, param2: javalangClass<javalangObject>, param3: boolean): javalangObject;
					public static createViewFromXML(param0: number, param1: javalangClass<javalangObject>, param2: androidcontentContext): javalangObject;
					public static getDP(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module android {
			export module common {
				export module animations {
					export class AnimationEasingHelper {
						public constructor();
						public static circularEaseOut(param0: number, param1: number, param2: number, param3: number): number;
						public static sinusoidalEaseInOut(param0: number, param1: number, param2: number, param3: number): number;
						public static cubicEaseIn(param0: number, param1: number, param2: number, param3: number): number;
						public static quadraticEaseInOut(param0: number, param1: number, param2: number, param3: number): number;
						public static quarticEaseIn(param0: number, param1: number, param2: number, param3: number): number;
						public static quadraticEaseOut(param0: number, param1: number, param2: number, param3: number): number;
						public static exponentialEaseIn(param0: number, param1: number, param2: number, param3: number): number;
						public static exponentialEaseOut(param0: number, param1: number, param2: number, param3: number): number;
						public static quadraticEaseIn(param0: number, param1: number, param2: number, param3: number): number;
						public static quarticEaseOut(param0: number, param1: number, param2: number, param3: number): number;
						public static quarticEaseInOut(param0: number, param1: number, param2: number, param3: number): number;
						public static cubicEaseInOut(param0: number, param1: number, param2: number, param3: number): number;
						public static sinusoidalEaseOut(param0: number, param1: number, param2: number, param3: number): number;
						public static cubicEaseOut(param0: number, param1: number, param2: number, param3: number): number;
						public static quinticEaseIn(param0: number, param1: number, param2: number, param3: number): number;
						public static quinticEaseOut(param0: number, param1: number, param2: number, param3: number): number;
						public static exponentialEaseInOut(param0: number, param1: number, param2: number, param3: number): number;
						public static circularEaseInOut(param0: number, param1: number, param2: number, param3: number): number;
						public static quinticEaseInOut(param0: number, param1: number, param2: number, param3: number): number;
						public static linear(param0: number, param1: number, param2: number, param3: number): number;
						public static sinusoidalEaseIn(param0: number, param1: number, param2: number, param3: number): number;
						public static circularEaseIn(param0: number, param1: number, param2: number, param3: number): number;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export module animations {
					export class EasingType {
						public static Linear: com.telerik.android.common.animations.EasingType;
						public static QuadraticIn: com.telerik.android.common.animations.EasingType;
						public static QuadraticOut: com.telerik.android.common.animations.EasingType;
						public static QuadraticInOut: com.telerik.android.common.animations.EasingType;
						public static CubicIn: com.telerik.android.common.animations.EasingType;
						public static CubicOut: com.telerik.android.common.animations.EasingType;
						public static CubicInOut: com.telerik.android.common.animations.EasingType;
						public static QuarticIn: com.telerik.android.common.animations.EasingType;
						public static QuarticOut: com.telerik.android.common.animations.EasingType;
						public static QuarticInOut: com.telerik.android.common.animations.EasingType;
						public static QuinticIn: com.telerik.android.common.animations.EasingType;
						public static QuinticOut: com.telerik.android.common.animations.EasingType;
						public static QuinticInOut: com.telerik.android.common.animations.EasingType;
						public static SinusoidalIn: com.telerik.android.common.animations.EasingType;
						public static SinusoidalOut: com.telerik.android.common.animations.EasingType;
						public static SinusoidalInOut: com.telerik.android.common.animations.EasingType;
						public static ExponentialIn: com.telerik.android.common.animations.EasingType;
						public static ExponentialOut: com.telerik.android.common.animations.EasingType;
						public static ExponentialInOut: com.telerik.android.common.animations.EasingType;
						public static CircularIn: com.telerik.android.common.animations.EasingType;
						public static CircularOut: com.telerik.android.common.animations.EasingType;
						public static CircularInOut: com.telerik.android.common.animations.EasingType;
						public static valueOf(param0: string): com.telerik.android.common.animations.EasingType;
						public static values(): native.Array<com.telerik.android.common.animations.EasingType>;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export module exceptions {
					export class MissingLayoutPartException {
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export module exceptions {
					export class WrongLayoutPartTypeException {
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export module math {
					export class RadCircle {
						public centerX: number;
						public centerY: number;
						public radius: number;
						public constructor();
						public constructor(param0: com.telerik.android.common.math.RadPoint, param1: number);
						public center(): com.telerik.android.common.math.RadPoint;
						public getBounds(): com.telerik.android.common.math.RadRect;
						public constructor(param0: number, param1: number, param2: number);
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export module math {
					export class RadLine {
						public x1: number;
						public x2: number;
						public y1: number;
						public y2: number;
						public constructor(param0: com.telerik.android.common.math.RadPoint, param1: com.telerik.android.common.math.RadPoint);
						public static round(param0: com.telerik.android.common.math.RadLine): com.telerik.android.common.math.RadLine;
						public constructor(param0: number, param1: number, param2: number, param3: number);
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadPolarCoordinates.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export module math {
					export class RadMath {
						public static DEG_TO_RAD_FACTOR: number;
						public static RAD_TO_DEG_FACTOR: number;
						public static EPSILON: number;
						public static areClose(param0: number, param1: number): boolean;
						public static getPolarCoordinates(param0: com.telerik.android.common.math.RadPoint, param1: com.telerik.android.common.math.RadPoint): com.telerik.android.common.math.RadPolarCoordinates;
						public static areClose(param0: number, param1: number, param2: number): boolean;
						public static isOne(param0: number): boolean;
						public static getRotatedSize(param0: com.telerik.android.common.math.RadSize, param1: number): com.telerik.android.common.math.RadSize;
						public static getPointDistance(param0: number, param1: number, param2: number, param3: number): number;
						public static isZero(param0: number): boolean;
						public static getArcPoint(param0: number, param1: com.telerik.android.common.math.RadPoint, param2: number): com.telerik.android.common.math.RadPoint;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export module math {
					export class RadPoint {
						public static getInfinityPoint(): com.telerik.android.common.math.RadPoint;
						public constructor();
						public static round(param0: com.telerik.android.common.math.RadPoint): com.telerik.android.common.math.RadPoint;
						public equals(param0: javalangObject): boolean;
						public getX(): number;
						public getY(): number;
						public constructor(param0: number, param1: number);
						public toString(): string;
						public static getEmpty(): com.telerik.android.common.math.RadPoint;
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module android {
			export module common {
				export module math {
					export class RadPolarCoordinates {
						public angle: number;
						public radius: number;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export module math {
					export class RadPolarVector {
						public centerX: number;
						public centerY: number;
						public pointX: number;
						public pointY: number;
						public angle: number;
						public point(): com.telerik.android.common.math.RadPoint;
						public constructor();
						public center(): com.telerik.android.common.math.RadPoint;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.RadThickness.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export module math {
					export class RadRect {
						public getLocation(): com.telerik.android.common.math.RadPoint;
						public constructor();
						public equals(param0: javalangObject): boolean;
						public contains(param0: number, param1: number): boolean;
						public getX(): number;
						public constructor(param0: com.telerik.android.common.math.RadPoint, param1: com.telerik.android.common.math.RadPoint);
						public getCenter(): com.telerik.android.common.math.RadPoint;
						public getRight(): number;
						public static getEmpty(): com.telerik.android.common.math.RadRect;
						public static centerRect(param0: com.telerik.android.common.math.RadRect, param1: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
						public getHeight(): number;
						public toString(): string;
						public constructor(param0: number, param1: number, param2: number, param3: number);
						public getBottom(): number;
						public intersectsWith(param0: com.telerik.android.common.math.RadRect): boolean;
						public getWidth(): number;
						public static inflate(param0: com.telerik.android.common.math.RadRect, param1: com.telerik.android.common.RadThickness): com.telerik.android.common.math.RadRect;
						public static round(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
						public contains(param0: com.telerik.android.common.math.RadRect): boolean;
						public getY(): number;
						public isSizeValid(): boolean;
						public constructor(param0: number, param1: number);
						public static toSquare(param0: com.telerik.android.common.math.RadRect, param1: boolean): com.telerik.android.common.math.RadRect;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module common {
				export module math {
					export class RadSize {
						public constructor();
						public halfWidth(): number;
						public halfHeight(): number;
						public getWidth(): number;
						public equals(param0: javalangObject): boolean;
						public static getEmpty(): com.telerik.android.common.math.RadSize;
						public getHeight(): number;
						public static getInfinitySize(): com.telerik.android.common.math.RadSize;
						public constructor(param0: number, param1: number);
						public static getInvalid(): com.telerik.android.common.math.RadSize;
					}
				}
			}
		}
	}
}
