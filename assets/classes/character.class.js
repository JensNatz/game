/**
 * Represents a character in the game with various states, animations, and interactions.
 * Extends the MovableObject class to inherit movement and positioning properties.
 * @extends MovableObject
 */
class Character extends MovableObject {
    world;
    hp;
    power;
    standardImunityTime = 0;
    currentDamageImmunityDuration = 0;
    walkImages;
    getHitImages;
    dieImages;
    idleImages;
    attackImages;
    getLaseredImages;
    hasDetectedHero = false;
    laserHitDuration = 0;
    currentState = 'idle';
    dieSoundPlayed = false;
    dieAnimationPlayed = false;

    /**
     * Plays the walking animation sequence.
     */
    playWalkingAnimation() {
        this.ensureAnimationStartsAtBeginning(this.walkImages);
        this.playAnimation(this.walkImages);
    }

    /**
     * Plays the 'get hit' animation and resets the state to 'idle' afterward.
     */
    playGetHitAnimation() {
        this.ensureAnimationStartsAtBeginning(this.getHitImages);
        this.playAnimation(this.getHitImages);
        if (this.currentImg === this.getHitImages.length) {
            this.currentState = 'idle';
        }
    }

    /**
     * Plays the idle animation sequence.
     */
    playIdleAnimation() {
        this.ensureAnimationStartsAtBeginning(this.idleImages);
        this.playAnimation(this.idleImages);
    }

    /**
     * Plays the die animation and sets the flag once the animation completes.
     */
    playDieAnimation() {
        this.ensureAnimationStartsAtBeginning(this.dieImages);
        if (this.currentImg !== this.dieImages.length) {
            this.playAnimation(this.dieImages);
        } else {
            this.dieAnimationPlayed = true;
        }
    }

    /**
     * Plays the attacking animation sequence.
     */
    playAttackingAnimation() {
        this.ensureAnimationStartsAtBeginning(this.attackImages);
        this.playAnimation(this.attackImages);
    }

    /**
     * Plays the lasered animation sequence.
     */
    playLaseredAnimation() {
        this.ensureAnimationStartsAtBeginning(this.getLaseredImages);
        this.playAnimation(this.getLaseredImages);
    }

    /**
     * Reduces the duration of the character's damage immunity, if applicable.
     */
    reduceDamageImmunityDuration() {
        if (this.currentDamageImmunityDuration > 0) {
            this.currentDamageImmunityDuration--;
        }
    }

    /**
     * Reduces the duration of the laser hit effect, if applicable.
     */
    reduceLaserHitDuration() {
        if (this.laserHitDuration > 0) {
            this.laserHitDuration--;
        }
    }

    /**
     * Reduces character's health by the specified power and triggers damage immunity.
     * Plays the damage sound and updates state if not jumping.
     * @param {number} power - The amount of damage to apply to the character's health.
     */
    takeDamage(power) {
        this.hp -= power;
        this.setImmunityToDamageTimer();
        if (this.currentState !== 'jumping') {
            this.currentState = 'hurting';
        }
        if (!this.isMuted) {
            this.sounds.takeDamage.play();
        }
    }

    /**
     * Reacts to a laser beam by inflicting damage if the character is vulnerable.
     * @param {number} power - The power of the laser attack.
     */
    reactToLaserbeam(power) {
        if (this.isVulnerable() && !this.isBeingLasered()) {
            this.takeLaserDamage(power);
        }
    }

    /**
     * Applies laser damage to the character, triggering laser-specific animations and sound.
     * @param {number} power - The power of the laser damage.
     */
    takeLaserDamage(power) {
        this.hp -= power;
        this.laserHitDuration = 10;
        this.currentState = 'lasered';
        this.setImmunityToDamageTimer();
        if (!this.isMuted) {
            this.sounds.takeDamage.play();
        }
    }

    /**
     * Sets the character's immunity timer to the default duration.
     */
    setImmunityToDamageTimer() {
        this.currentDamageImmunityDuration = this.standardImunityTime;
    }

    /**
     * Checks if the character is vulnerable to damage (no immunity).
     * @returns {boolean} True if the character is vulnerable to damage.
     */
    isVulnerable() {
        return this.currentDamageImmunityDuration === 0;
    }

    /**
     * Checks if the character is currently affected by a laser hit.
     * @returns {boolean} True if the character is currently being lasered.
     */
    isBeingLasered() {
        return this.laserHitDuration > 0;
    }

    /**
     * Sets the flag indicating the character has detected the hero.
     */
    detectHero() {
        this.hasDetectedHero = true;
    }
}
